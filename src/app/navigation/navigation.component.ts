import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  stores: Store[] = [{
    label: 'Whole Foods',
    id: 1
  }, {
    label: 'WF 365',
    id: 2
  }, {
    label: 'Trader Joe\'s',
    id: 3
  }, {
    label: 'Stop & Shop',
    id: 4
  }];

  select(store: Store) {
    console.log(store.id);
  }

}
