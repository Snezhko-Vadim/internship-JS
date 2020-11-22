function createSecretHolder(secret) {
  let scr = secret;
  return {
    getSecret : () => {
      return scr;
    },
    setSecret : (value) => {
      scr = value;
    },
  }
}