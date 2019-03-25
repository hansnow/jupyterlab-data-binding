const { useState, useEffect } = require("react");

export function useModel(backbone, key) {
  const [value, setValue] = useState(backbone.model.get(key));
  const updateValue = value => {
    backbone.model.set({ [key]: value });
    backbone.touch();
  };
  useEffect(() => {
    backbone.model.on(`change:${key}`, () => setValue(backbone.model.get(key)));
  }, []);
  return [value, updateValue];
}
