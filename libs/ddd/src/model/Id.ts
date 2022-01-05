import { ValueObject } from '@libs/ddd/model/ValueObject';

export abstract class Id extends ValueObject<Id> {
  constructor(readonly key: string) {
    super();
  }
}
