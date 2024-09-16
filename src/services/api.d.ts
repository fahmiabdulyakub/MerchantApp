declare global {
  type ApiResponse<T> = {
    success: boolean;
    data: T;
    message: string | null;
    errors: ErrorResponse;
  };

  type ErrorResponse = {
    code: string;
    message: string;
  };

  type ApiBuilder = {
    url: string;
    method: string;
    data?: Record<string, unknown> | string | null;
    params?: Record<string, unknown> | string | null;
    headers?:
      | Headers
      | string[][]
      | Record<string, string | undefined>
      | undefined;
  };
}
export {};
