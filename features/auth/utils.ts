interface ApiError {
  response?: {
    status: number;
  };
  status?: number;
}

export function isUnauthorizedError(error: unknown): boolean {
  if (!error) return false;

  const err = error as ApiError;

  if (err.response?.status === 401) return true;
  if (err.status === 401) return true;
  if (String(error).includes('401')) return true;

  return false;
}