function arrayDiff(a, b) {
    if (b.length) {
      for (i = 0; i<b.length;i++) {
      a = a.filter((item) => item !== b[i])
    }
     return a;
    } else {
      return a;
    }
  }
