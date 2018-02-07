import { Response } from '@angular/http';

export default class Utils {
  static extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }


}
