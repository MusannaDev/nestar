import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {

  public async batchRollback(): Promise<void> {
    console.log("batchRollback");
  }

  public async batchTopProperties(): Promise<void> {
    console.log("batchTopProperties");
  }

  public async batchTopAgents(): Promise<void> {
    console.log("batchTopAgents")
  }

  getHello(): string {
    return 'Welcome to Nestar Batch Server!';
  }
}
