export interface Version {
  readonly moniker: string;
  readonly major  : number;
  readonly minor  : number;
  readonly patch  : number;
}

export const Version = {
  new(o ?: {
    moniker ?: string;
    major   ?: number;
    minor   ?: number;
    patch   ?: number;
  }) {
    return {
      moniker : o?.moniker ?? "v",
      major   : o?.major   ??  0,
      minor   : o?.minor   ??  0,
      patch   : o?.patch   ??  0,
    } satisfies Version;
  },

  toString(a: Version) {
    return `${a.moniker} ${a.major}.${a.minor}.${a.patch}`;
  },

  compare(a: Version, b: Version) {
    let k: number;
    if((k = a.major - b.major) != 0) return k;
    if((k = a.minor - b.minor) != 0) return k;
    if((k = a.patch - b.patch) != 0) return k;
    return 0;
  }
}

export default Version;