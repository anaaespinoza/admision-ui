export interface MakeCallParams {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    endpoint: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    query?: string;
}