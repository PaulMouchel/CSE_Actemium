export const changeStateObjectField = (object, setObject, parameter, value) => {
    const newObject = object;
    newObject[parameter] = value;
    setObject(newObject);
 };