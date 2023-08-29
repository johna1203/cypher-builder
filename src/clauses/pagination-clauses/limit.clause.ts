import { ParametersBag } from '../../parameters/ParametersBag';
import { ShouldBeAdded } from '../../types/should-be-added';
import { StringBuilder } from '../../types/string-builder';
import { Clause } from '../base-clause';
import neo4j from 'neo4j-driver';

export class LimitClause extends Clause {
  protected limitParam: number;
  constructor(parametersBag: ParametersBag, limit: number) {
    super('LIMIT');
    this.limitParam = limit; //parametersBag.add(limit, true, 'limit');
  }
}

export class LimitClauseStringBuilder
  extends LimitClause
  implements StringBuilder, ShouldBeAdded
{
  __shouldBeAdded = true;
  build(): string {
    return `${this.prefix} ${this.limitParam}`;
  }
}
