export const updateObject = (object:any, newValue:string|number|any, path:string, cloneFn:(o:any) => any):any => {
  let clone = cloneFn(object);
  let cloneResult = clone;
  let stack:Array<string> = path.split('.');
  while(stack.length > 1) {
    let element:any = stack.shift();
    clone = clone[element];
  }
  let element:any = stack.shift();
  clone[element] = newValue;
  return cloneResult;
};