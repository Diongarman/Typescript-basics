interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
