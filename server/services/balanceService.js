// Mock service for user balances
export class BalanceService {
  constructor() {
    this.balances = {
      "user@example.com": {
        credits: 1500,
        usage: {
          deepgram: 24.50,
          grok: 18.30
        }
      }
    };
  }

  async getBalance(email) {
    return this.balances[email] || { credits: 0, usage: { deepgram: 0, grok: 0 } };
  }

  async deductCredits(email, amount) {
    if (this.balances[email]) {
      this.balances[email].credits -= amount;
      return true;
    }
    return false;
  }
}

export const balanceService = new BalanceService();
