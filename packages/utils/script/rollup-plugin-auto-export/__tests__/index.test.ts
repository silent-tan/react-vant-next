import path from "node:path";

import type { MockInstance } from "vitest";

/**
 * 自动导出插件测试
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import * as core from "../core.mjs";
import autoExport from "../index.mjs";

// 模拟 core 模块
vi.mock("../core", () => ({
  collectExports: vi.fn(),
  generateExportStatements: vi.fn(),
  writeExportFile: vi.fn(),
}));

// 获取模拟函数的类型安全引用
const mockCollectExports = core.collectExports as unknown as MockInstance;
const mockGenerateExportStatements = core.generateExportStatements as unknown as MockInstance;
const mockWriteExportFile = core.writeExportFile as unknown as MockInstance;

// 模拟 console
const originalConsole = { ...console };
beforeEach(() => {
  console.log = vi.fn();
  console.warn = vi.fn();
  console.error = vi.fn();
});

afterEach(() => {
  console.log = originalConsole.log;
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
  vi.resetAllMocks();
});

describe("autoExport plugin", () => {
  it("应该使用默认选项创建插件", () => {
    const plugin = autoExport();

    expect(plugin.name).toBe("auto-export");
    expect(typeof plugin.buildStart).toBe("function");

    // 调用插件的 buildStart hook
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});
  });

  it("应该在开发环境下运行", () => {
    // 保存原始环境变量
    const originalNodeEnv = process.env.NODE_ENV;

    // 设置为开发环境
    process.env.NODE_ENV = "development";

    // 模拟核心函数返回值
    mockCollectExports.mockReturnValue({ dir1: [{ name: "func1", path: "./dir1/file1" }] });
    mockGenerateExportStatements.mockReturnValue({
      content: "export content",
      totalExports: 1,
      groupCount: 1,
    });
    mockWriteExportFile.mockReturnValue(true);

    // 创建插件并调用 buildStart
    const plugin = autoExport();
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});

    // 验证核心函数调用
    expect(mockCollectExports).toHaveBeenCalledWith("src", expect.any(Object));
    expect(mockGenerateExportStatements).toHaveBeenCalled();
    expect(mockWriteExportFile).toHaveBeenCalledWith(
      path.resolve("src/re-export.ts"),
      "export content",
    );

    // 验证日志输出
    expect(console.log).toHaveBeenCalledWith("[auto-export] 开始分析导出项...");
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("成功生成"));
    expect(console.log).toHaveBeenCalledWith("[auto-export] 导出处理完成！");

    // 恢复环境变量
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("应该在生产环境下跳过处理当 devOnly 为 true", () => {
    // 保存原始环境变量
    const originalNodeEnv = process.env.NODE_ENV;

    // 设置为生产环境
    process.env.NODE_ENV = "production";

    // 创建插件并调用 buildStart
    const plugin = autoExport({ devOnly: true });
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});

    // 验证核心函数未被调用
    expect(mockCollectExports).not.toHaveBeenCalled();
    expect(mockGenerateExportStatements).not.toHaveBeenCalled();
    expect(mockWriteExportFile).not.toHaveBeenCalled();

    // 恢复环境变量
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("应该在生产环境下运行当 devOnly 为 false", () => {
    // 保存原始环境变量
    const originalNodeEnv = process.env.NODE_ENV;

    // 设置为生产环境
    process.env.NODE_ENV = "production";

    // 模拟核心函数返回值
    mockCollectExports.mockReturnValue({ dir1: [{ name: "func1", path: "./dir1/file1" }] });
    mockGenerateExportStatements.mockReturnValue({
      content: "export content",
      totalExports: 1,
      groupCount: 1,
    });
    mockWriteExportFile.mockReturnValue(true);

    // 创建插件并调用 buildStart
    const plugin = autoExport({ devOnly: false });
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});

    // 验证核心函数调用
    expect(mockCollectExports).toHaveBeenCalled();
    expect(mockGenerateExportStatements).toHaveBeenCalled();
    expect(mockWriteExportFile).toHaveBeenCalled();

    // 恢复环境变量
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("应该处理错误", () => {
    // 模拟核心函数抛出错误
    mockCollectExports.mockImplementation(() => {
      throw new Error("测试错误");
    });

    // 创建插件并调用 buildStart
    const plugin = autoExport();
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});

    // 验证错误处理
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("测试错误"));
  });

  it("应该使用自定义选项", () => {
    // 模拟核心函数返回值
    mockCollectExports.mockReturnValue({ dir1: [{ name: "func1", path: "./dir1/file1" }] });
    mockGenerateExportStatements.mockReturnValue({
      content: "export content",
      totalExports: 1,
      groupCount: 1,
    });
    mockWriteExportFile.mockReturnValue(true);

    // 自定义选项
    const options = {
      srcDir: "custom-src",
      outputFile: "custom-src/exports.ts",
      excludeDirs: ["exclude-dir"],
      excludeFiles: ["exclude-file"],
      verbose: true,
    };

    // 创建插件并调用 buildStart
    const plugin = autoExport(options);
    const buildStartHook = plugin.buildStart as any;
    buildStartHook.call({});

    // 验证核心函数调用时使用了自定义选项
    expect(core.collectExports).toHaveBeenCalledWith("custom-src", {
      excludeDirs: ["exclude-dir"],
      excludeFiles: ["exclude-file"],
      verbose: true,
    });
    expect(core.writeExportFile).toHaveBeenCalledWith(
      path.resolve("custom-src/exports.ts"),
      "export content",
    );
  });
});
