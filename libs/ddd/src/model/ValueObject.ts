export abstract class ValueObject<T> {
  equals(vo: T): boolean {
    return vo instanceof ValueObject && vo.hashCode() === this.hashCode();
  }

  protected hashCode(): string {
    return JSON.stringify(this);
  }
}
