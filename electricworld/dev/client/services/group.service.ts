import { Group } from '../components/group.component';
import { GROUPS } from '../templates/mock-groups';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
  getGroups() {
    return Promise.resolve(GROUPS);
  }

  getGroup(id: string) {
    return Promise.resolve(GROUPS).then(
      groups => groups.filter(group => group.id === id)[0]
    );
  }
}
