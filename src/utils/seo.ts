export function getCanonicalUrl(path: string = ''): string {
    const baseUrl = 'https://www.ecoqual.in';

    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}
