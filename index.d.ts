/// <reference lib="es2020" />
/// <reference lib="es2021.string" />
/// <reference lib="es2022.array" />
/// <reference lib="es2022.object" />
// deno-lint-ignore-file no-explicit-any
// qjs version 2023-12-09

// The Array/TypedArray method `findLast` is described as part of "es2023.array"
// but the rest of "es2023.array" is not implemented in quickjs, so the
// `findLast` interface is described below.

interface Array<T> {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any,
  ): T | undefined;
}

interface Int8Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Int8Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Uint8Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Uint8Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Uint8ClampedArray {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (
      value: number,
      index: number,
      array: Uint8ClampedArray,
    ) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Int16Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Uint16Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Uint16Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Int32Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Int32Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Uint32Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Uint32Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Float32Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Float32Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface Float64Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Float64Array) => unknown,
    thisArg?: any,
  ): number | undefined;
}

interface BigInt64Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: Int16Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
}

interface BigUint64Array {
  /**
   * Iterate the array in reverse order and returns the value of the first
   * element that satisfies the provided `predicate`. If no elements satisfy the
   * `predicate`, returns `undefined`.
   * @param predicate
   * @param thisArg
   */
  findLast(
    predicate: (value: number, index: number, array: BigUint64Array) => unknown,
    thisArg?: any,
  ): bigint | undefined;
}

/**
 * Provides the command line arguments. The first argument is the script name.
 */
declare let scriptArgs: string[];

/**
 * Print the arguments separated by spaces and a trailing newline.
 * Equivalent to `console.log`.
 */
declare function print(...data: any[]): void;

declare namespace std {
  /**
   * Exit the process.
   * @param n the error code to exit with, defaults to `0`
   */
  export function exit(n?: number): never;

  /**
   * Evaluate the string `str` as a script (global eval).
   * options is an optional object containing the following optional properties:
   * - `backtrace_barrier` Boolean (default = false).
   *   - If true, error backtraces do not list the stack frames below the
   *     evalScript.
   */
  export function evalScript(
    str: string,
    options?: { backtrace_barrier?: boolean },
  ): any;

  /** Evaluate the file `filename` as a script (global eval). */
  export function loadScript(filename: string): any;

  /**
   * Load the file `filename` and return it as a string assuming UTF-8 encoding.
   * Return `null` in case of I/O error.
   */
  export function loadFile(filename: string): string | null;

  /**
   * Open a file (wrapper to the libc fopen()). Return the FILE object or null
   * in case of I/O error. If `errorObj` is not undefined, set its `errno`
   * property to the error code or to `0` if no error occured.
   */
  export function open(
    filename: string,
    flags: string,
    errorObj?: { errno?: number },
  ): FILE | null;

  /**
   * Open a process by creating a pipe (wrapper to the libc `popen()`). Return
   * the FILE object or `null` in case of I/O error. If errorObj is not
   * undefined, set its errno property to the error code or to 0 if no error
   * occurred.
   */
  export function popen(
    command: string,
    flags: string,
    errorObj?: { errno?: number },
  ): FILE | null;

  /**
   * Open a file from a file handle (wrapper to the libc fdopen()). Return the
   * FILE object or null in case of I/O error. If errorObj is not undefined,
   * set its errno property to the error code or to 0 if no error occurred.
   */
  export function fdopen(
    fd: FILE,
    flags: string,
    errorObj?: { errno?: number },
  ): FILE | null;

  /**
   * Open a temporary file. Return the FILE object or null in case of I/O error.
   * If errorObj is not undefined, set its errno property to the error code or
   * to 0 if no error occurred.
   */
  export function tmpfile(errorObj?: { errno?: number }): FILE | null;

  /** Equivalent to `std.out.puts(str)`. */
  export function puts(str: string): void;

  /** Equivalent to `std.out.printf(fmt, ...args)`. */
  export function printf(fmt: string, ...args: string[]): void;

  /** Equivalent to the libc `sprintf()`. */
  export function sprintf(fmt: string, ...args: string[]): void;

  /** stdin */
  const _in: FILE;
  export { _in as in };
  /** stdout */
  export const out: FILE;
  /** stderr */
  export const err: FILE;

  export const SEEK_SET: number;
  export const SEEK_CUR: number;
  export const SEEK_END: number;

  export enum Error {
    EACCES,
    EBADF,
    EBUSY,
    EEXIST,
    EINVAL,
    EIO,
    ENOENT,
    ENOSPC,
    ENOSYS,
    EPERM,
    EPIPE,
  }

  /** Return a string that describes the error `errno`. */
  export function strerror(errno: number): string;

  /**
   * Manually invoke the cycle removal algorithm. The cycle removal algorithm is
   * automatically started when needed, so this function is useful in case of
   * specific memory constraints or for testing.
   */
  export function gc(): void;

  /**
   * Return the value of the environment variable `name` or `undefined` if it is
   * not defined.
   */
  export function getenv(name: string): string | undefined;

  /** Set the value of the environment variable name to the string value. */
  export function setenv(name: string, value: string): void;

  /** Delete the environment variable `name`. */
  export function unsetenv(name: string): void;

  /**
   * Return an object containing the environment variables as key-value pairs.
   */
  export function getenviron(): Record<string, string>;

  /**
   * Download url using the curl command line utility. options is an optional
   * object containing the following optional properties:
   * @param options.binary Default is false.
   * If true, the response is an ArrayBuffer instead of a string. When a
   * string is returned, the data is assumed to be UTF-8 encoded.
   * @param options.full Default is false.
   * If true, return an object containing the properties
   * - response (response content)
   * - responseHeaders (headers separated by CRLF)
   * - status (status  code).
   * Response is `null` is case of protocol or network error. If full is
   * false, only the response is returned if the status is between 200 and 299.
   * Otherwise `null` is returned.
   */
  export function urlGet(
    url: string | URL,
    options: {
      binary: true;
      full: true;
    },
  ): {
    response: ArrayBuffer | null;
    responseHeaders: string;
    status: number;
  };

  export function urlGet(
    url: string | URL,
    options: {
      binary?: false;
      full: true;
    },
  ): {
    response: string | null;
    responseHeaders: string;
    status: number;
  };

  export function urlGet(
    url: string | URL,
    options: {
      binary: true;
      full?: false;
    },
  ): ArrayBuffer | null;

  export function urlGet(
    url: string | URL,
    options?: {
      binary?: false;
      full?: false;
    },
  ): string | null;

  export type JSONValue = string | number | boolean | JSONValue[] | null | {
    [key: string]: JSONValue;
  };

  /**
   * Parse `str` using a superset of `JSON.parse`. The following extensions
   * are accepted:
   *
   * - Single line and multiline comments
   * - unquoted properties (ASCII-only Javascript identifiers)
   * - trailing comma in array and object definitions
   * - single quoted strings
   * - \f and \v are accepted as space characters
   * - leading plus in numbers
   * - octal (0o prefix) and hexadecimal (0x prefix) numbers
   */
  export function parseExtJSON(str: string): JSONValue;

  interface FILE {
    /**
     * Close the file. Return `0` if OK or `-errno` in case of I/O error.
     */
    close(): number;

    /** Outputs the string with the UTF-8 encoding. */
    puts(str: string): string;

    /**
     * Formatted printf.
     * The same formats as the standard C library printf are supported. Integer
     * format types (e.g. `%d`) truncate the Numbers or BigInts to 32 bits. Use
     * the `l` modifier (e.g. `%ld`) to truncate to 64 bits.
     */
    printf(fmt: string, ...args: string[]): void;

    /**
     * Flush the buffered file.
     */
    flush(): void;

    /**
     * Seek to a give file position (whence is std.SEEK_*). offset can be a
     * number or a bigint. Return 0 if OK or -errno in case of I/O error.
     */
    seek(offset: number | BigInt, whence: number): number;

    /**
     * Return the current file position.
     */
    tell(): number;

    /**
     * Return the current file position as a bigint.
     */
    tello(): BigInt;

    /**
     * Return true if end of file.
     */
    eof(): boolean;

    /** Return the associated OS handle. */
    fileno(): os.FileHandle;

    /**
     * Return true if there was an error.
     */
    error(): boolean;

    /**
     * Clear the error indication.
     */
    clearerr(): void;

    /**
     * Read `length` bytes from the file to the ArrayBuffer `buffer` at byte
     * position `position` (wrapper to the libc fread).
     */
    read(
      buffer: ArrayBuffer,
      position: number | BigInt,
      length: number | BigInt,
    ): void;

    /**
     * Write `length` bytes to the file from the ArrayBuffer `buffer` at byte
     * position `position` (wrapper to the libc fwrite).
     */
    write(
      buffer: ArrayBuffer,
      position: number | BigInt,
      length: number | BigInt,
    ): void;

    /**
     * Return the next line from the file, assuming UTF-8 encoding, excluding
     * the trailing line feed.
     */
    getline(): string;

    /**
     * Read `max_size` bytes from the file and return them as a string assuming
     * UTF-8 encoding. If `max_size` is not present, the file is read up its
     * end.
     */
    readAsString(max_size?: number): string;

    /**
     * Return the next byte from the file. Return `-1` if the end of file is
     * reached.
     */
    getByte(): number;

    /** Write one byte to the file. */
    putByte(c: number): void;
  }
}

/**
 * The `os` module provides Operating System specific functions:
 *
 * - low level file access
 * - signals
 * - timers
 * - asynchronous I/O
 * - workers (threads)
 *
 * The OS functions usually return `0` if OK or an OS specific negative error
 * code.
 */
declare namespace os {
  type FileHandle = number;

  /**
   * Open a file. Return a handle or < 0 if error.
   * @param mode defaults to `0o666`
   */
  export function open(
    filename: string,
    flags: number,
    mode: number,
  ): FileHandle;

  // POSIX open flags.
  export const O_RDONLY: number;
  export const O_WRONLY: number;
  export const O_RDWR: number;
  export const O_APPEND: number;
  export const O_CREAT: number;
  export const O_EXCL: number;
  export const O_TRUNC: number;

  /**
   * (Windows specific). Open the file in text mode. The default is binary mode.
   */
  export const O_TEXT: number;

  /** Close the file handle `fd`. */
  export function close(fd: FileHandle): number;

  /**
   * Seek in the file. Use std.SEEK_* for whence. offset is either a number or a
   * bigint. If offset is a bigint, a bigint is returned too.
   */
  export function seek(fd: FileHandle, offset: number, whence: number): number;
  export function seek(fd: FileHandle, offset: BigInt, whence: number): BigInt;

  /**
   * Read `length` bytes from the file handle `fd` to the ArrayBuffer buffer at
   * byte position `offset`. Return the number of read bytes or < 0 if error.
   */
  export function read(
    fd: FileHandle,
    buffer: ArrayBuffer,
    offset: number,
    length: number,
  ): number;

  /**
   * Write `length` bytes to the file handle `fd` from the ArrayBuffer `buffer`
   * at byte position `offset`. Return the number of written bytes or < 0 if
   * error.
   */
  export function write(
    fd: FileHandle,
    buffer: ArrayBuffer,
    offset: number,
    length: number,
  ): number;

  /** Return true is fd is a TTY (terminal) handle. */
  export function isatty(fd: FileHandle): boolean;

  /** Return the TTY size as `[width, height]` or `null` if not available. */
  export function ttyGetWinSize(fd: FileHandle): number | null;

  /** Set the TTY in raw mode. */
  export function ttySetRaw(fd: FileHandle): void;

  /** Remove a file. Return 0 if OK or `-errno`. */
  export function remove(filename: string): number;

  /** Rename a file. Return 0 if OK or `-errno`. */
  export function rename(oldname: string, newname: string): number;

  /**
   * Return `[str, err]` where `str` is the canonicalized absolute pathname of
   * `path` and `err` is the error code.
   */
  export function realpath(path: string): [string, number];

  /**
   * Return `[str, err]` where `str` is the current working directory and `err`
   * the error code.
   */
  export function getcwd(): [string, number];

  /** Change the current directory. Return 0 if OK or -errno. */
  export function chdir(path: string): number;

  /**
   * Create a directory at path. Return 0 if OK or -errno.
   * @param mode defaults to 0o777
   */
  export function mkdir(path: string, mode?: number): number;

  /**
   * Return `[obj, err]` where
   * - `obj` is an object containing the file status of path.
   * - `err` is the error code.
   */
  export function stat(path: string): [FileStatus, number];

  /**
   * Return `[obj, err]` where
   * - `obj` is an object containing the file status of link to the path.
   * - `err` is the error code.
   */
  export function lstat(path: string): [FileStatus, number];

  /**
   * Constants to interpret the mode property returned by stat(). They have the
   * same value as in the C system header `sys/stat.h`.
   */
  enum FileStatusMode {
    S_IFMT,
    S_IFIFO,
    S_IFCHR,
    S_IFDIR,
    S_IFBLK,
    S_IFREG,
    S_IFSOCK,
    S_IFLNK,
    S_ISGID,
    S_ISUID,
  }

  interface FileStatus {
    dev: number;
    ino: number;
    mode: FileStatusMode;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blocks: number;
    atime: number;
    mtime: number;
    ctime: number;
  }

  /**
   * Change the access and modification times of the file path. The times are
   * specified in milliseconds since 1970. Return 0 if OK or -errno.
   */
  export function utimes(path: string, atime: number, mtime: number): number;

  /**
   * Create a link at `linkpath` containing the string `target`.
   * Return 0 if OK or `-errno`.
   */
  export function symlink(target: string, linkpath: string): number;

  /**
   * Return [str, err] where str is the link target and err the error code.
   */
  export function readlink(path: string): [string, number];

  /**
   * Return `[filenames, err]` where `filenames` is an array of strings
   * containing the filenames of the directory `path`. `err` is the error code.
   */
  export function readdir(path: string): [string[], number];

  /**
   * Add a read handler to the file handle fd. func is called each time there is
   * data pending for fd. A single read handler per file handle is supported.
   * Use `func = null` to remove the handler.
   */
  export function setReadHandler(fd: FileHandle, func: Function | null): void;

  /**
   * Add a write handler to the file handle fd. func is called each time data
   * can be written to fd. A single write handler per file handle is supported.
   * Use `func = null` to remove the handler.
   */
  export function setWriteHandler(fd: number, func: Function | null): void;

  /**
   * Call the function `func` when the signal `signal` happens. Only a single
   * handler per signal number is supported. Use `null` to set the default
   * handler or `undefined` to ignore the signal. Signal handlers can only be
   * defined in the main thread.
   */
  export function signal(
    signal: Signal,
    func?: (() => void) | null | undefined,
  ): void;

  /** POSIX signal numbers */
  type Signal = number;
  export const SIGABRT: Signal;
  export const SIGALRM: Signal;
  export const SIGCHLD: Signal;
  export const SIGCONT: Signal;
  export const SIGFPE: Signal;
  export const SIGILL: Signal;
  export const SIGINT: Signal;
  export const SIGPIPE: Signal;
  export const SIGQUIT: Signal;
  export const SIGSEGV: Signal;
  export const SIGSTOP: Signal;
  export const SIGTERM: Signal;
  export const SIGTSTP: Signal;
  export const SIGTTIN: Signal;
  export const SIGTTOU: Signal;
  export const SIGUSR1: Signal;
  export const SIGUSR2: Signal;

  interface ExecOptions {
    /**
     * Boolean (default = true). If true, wait until the process is terminated.
     * In this case, exec return the exit code if positive or the negated
     * signal number if the process was interrupted by a signal. If false, do
     * not block and return the process id of the child.
     */
    block?: boolean;

    /**
     * Boolean (default = true). If true, the file is searched in the PATH
     * environment variable.
     */
    usePath?: boolean;

    /** String (default = args[0]). Set the file to be executed. */
    file?: string;

    /** String. If present, set the working directory of the new process. */
    cwd?: string;

    /** If present, set the handle in the child for stdin. */
    stdin?: any;

    /** If present, set the handle in the child for stdout. */
    stdout?: any;

    /** If present, set the handle in the child for stderr. */
    stderr?: any;

    /**
     * Object. If present, set the process environment from the object
     * key-value pairs. Otherwise use the same environment as the current
     * process.
     */
    env?: Record<string, string>;

    /** Integer. If present, the process uid with setuid. */
    uid?: number;

    /** Integer. If present, the process gid with setgid. */
    gid?: number;
  }

  /** Execute a process with the arguments args. */
  export function exec(args: string[], options?: ExecOptions): number;

  /**
   * waitpid Unix system call.
   * Return the array [ret, status]. ret contains -errno in case of error.
   */
  export function waitpid(pid: number, options?: typeof WNOHANG): [number, any];

  /** Constant for the options argument of waitpid. */
  export const WNOHANG: number;

  /** dup Unix system call. */
  export function dup(fd: FileHandle): FileHandle;

  /** dup2 Unix system call. */
  export function dup2(oldfd: FileHandle, newfd: FileHandle): void;

  /**
   * pipe Unix system call.
   * Return two handles as [read_fd, write_fd] or null in case of error.
   */
  export function pipe(): [read_fd: FileHandle, write_fd: FileHandle] | null;

  /** Sleep during delay_ms milliseconds. */
  export function sleep(delay_ms: number): number;

  type TimerHandle = number;

  /** Call the function func after `delay` ms. Return a handle to the timer. */
  export function setTimeout(func: () => void, delay: number): TimerHandle;

  /** Cancel a timer. */
  export function clearTimeout(handle: TimerHandle): void;

  /** Send the signal sig to the process pid. */
  export function kill(pid: number, sig: Signal): number;

  export const platform: "linux" | "darwin" | "win32" | "js";

  export class Worker {
    /**
     * In the created worker, `Worker.parent` represents the parent worker and
     * is used to send or receive messages.
     */
    static parent: Worker | null;

    /**
     * Constructor to create a new thread (worker) with an API close to the
     * WebWorkers. `module_filename` is a string specifying the module filename
     * which is executed in the newly created thread. As for dynamically
     * imported module, it is relative to the current script or module path.
     * Threads normally don't share any data and communicate between each other
     * with messages. Nested workers are not supported. An example is available
     * in "tests/test_worker.js".
     */
    constructor(module_filename: string);

    /**
     * Send a message to the corresponding worker. `msg` is cloned in the
     * destination worker using an algorithm similar to the HTML structured
     * clone algorithm. `SharedArrayBuffer` are shared between workers.
     * Current limitations: `Map` and `Set` are not supported yet.
     */
    postMessage(msg: string): void;

    /**
     * Getter and setter. Set a function which is called each time a message is
     * received. The function is called with a single argument. It is an object
     * with a data property containing the received message. The thread is not
     * terminated if there is at least one non null `onmessage` handler.
     */
    get onmessage(): (msg: { data: any }) => void;
    set onmessage(func: ((msg: { data: any }) => void) | null);
  }
}

// Only
// duplicated from https://github.com/microsoft/TypeScript/blob/main/src/lib/es2023.array.d.ts
