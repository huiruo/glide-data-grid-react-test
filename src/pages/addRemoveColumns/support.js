function panic(message = "This should not happen") {
  throw new Error(message);
}

export function assertNever(_never, msg) {
  return panic(msg ?? "Hell froze over");
}