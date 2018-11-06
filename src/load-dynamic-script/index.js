// @flow

export const loadDynamicScript = (src: string, id: string) => (
  callback: any,
) => {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src; // URL for the third-party library being loaded.
    script.id = id; // e.g., googleMaps or stripe
    if (document.body) document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }
};
