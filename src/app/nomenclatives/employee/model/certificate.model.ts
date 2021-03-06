/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import 'reflect-metadata';
import {BaseEntity} from '../../../_model';

export class Certificate extends BaseEntity {

  @Reflect.metadata('listable', {
    value: true,
    editable: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  @Reflect.metadata('filterable', 'string')
  title: string;

  @Reflect.metadata('listable', {
    value: true
  })
  @Reflect.metadata('widget', {
    location: {
      category: 'general'
    }
  })
  @Reflect.metadata('filterable', 'date')
  expeditionDate: Date;

  constructor(id: string, title: string, expeditionDate: Date) {
    super(id);
    this.title = title;
    this.expeditionDate = expeditionDate;
  }
}
