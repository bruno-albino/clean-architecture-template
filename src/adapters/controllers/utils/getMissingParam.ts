import { HttpRequest } from "../ports/http";

export enum ParamTypes {
  body = 'body',
  query = 'query',
  params = 'params',
}

export const getMissingParams = (request: HttpRequest, requiredFields: string[], requestPart: ParamTypes): string => {
  const missingParams: string[] = []

  requiredFields.forEach(name => {
    if(!Object.keys(request[requestPart]).includes(name)) {
      missingParams.push(name)
    }
  })

  return missingParams.join(', ')
}
