import 'reflect-metadata';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';
import {Certificate} from './certificate.model';

export class Employee extends BaseEntity {

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  firstName: string;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  lastName: string;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  prefix: string;

  @Reflect.metadata('listable', {
    value: true,
    visible: false
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  position: string;

  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  picture: string;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'others',
      group: 'dates'
    }
  })
  birthDate: Date;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'others',
      group: 'dates'
    }
  })
  hireDate: Date;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    name: 'textarea',
    location: {
      category: 'others',
      group: 'textarea'
    }
  })
  notes: string;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    name: 'textarea',
    location: {
      category: 'others',
      group: 'textarea'
    }
  })
  address: string;

  @Reflect.metadata('widget', {
    location: {
      category: 'others'
    }
  })
  state: string;

  @Reflect.metadata('widget', {
    location: {
      category: 'others'
    }
  })
  city: string;

  @Reflect.metadata('widget', {
    name: 'entity-search',
    options: {
      entityType: 'Certificate',
      properties: ['title']
    },
    location: {
      category: 'general'
    }
  })
  certificate: Certificate;

  @Reflect.metadata('widget', {
    name: 'detail',
    options: {
      entityType: 'Certificate'
    },
    location: {
      category: 'certificates'
    }
  })
  certificates: Collections.LinkedList<Certificate>;


  constructor(id: string,
              firstName: string,
              lastName: string,
              prefix: string,
              position: string,
              picture: string,
              birthDate: Date,
              hireDate: Date,
              notes: string,
              address: string,
              state: string,
              city: string,
              certificate: Certificate,
              certificates: Collections.LinkedList<Certificate>) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.position = position;
    this.picture = picture;
    this.birthDate = birthDate;
    this.hireDate = hireDate;
    this.notes = notes;
    this.address = address;
    this.state = state;
    this.city = city;
    this.certificate = certificate;
    this.certificates = certificates;
  }
}
