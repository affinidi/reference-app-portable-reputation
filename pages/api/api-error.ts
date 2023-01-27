export class ApiError extends Error {
  readonly code: string
  readonly httpStatusCode: number

  constructor(input: { code: string, httpStatusCode?: number, message?: string }) {
    super(input.message)

    this.code = input.code
    this.httpStatusCode = input.httpStatusCode ?? 500
  }
}
