import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterCrudPipe implements PipeTransform {

  transform(arr: any, user: User): any {
    if(arr)
    return arr.filter((i) => {
      if (user.Name && !i.Name.includes(user.Name)) return false;
      if (user.Email && !i.Email.includes(user.Email)) return false;
      if (user.Address && !i.Address.includes(user.Address)) return false;
      if (user['Phone number'] && !i['Phone number'].includes(user['Phone number'])) return false;
      return true;
    });
  }

}
