export function formatTrusteePublicName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length < 2) {
    return fullName;
  }

  const firstName = parts[0];
  const surname = parts[parts.length - 1];

  return `${firstName} ${surname.charAt(0)}`;
}
