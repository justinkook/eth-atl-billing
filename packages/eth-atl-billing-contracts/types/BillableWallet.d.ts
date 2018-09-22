/* Generated by ts-generator ver. 0.0.5 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class BillableWallet {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  options: contractOptions;
  methods: {
    bills(
      arg0: number | string
    ): TransactionObject<{
      0: string;
      1: string;
      2: string;
      3: boolean;
      4: string;
    }>;

    billerTokenProfiles(
      arg0: string,
      arg1: string
    ): TransactionObject<{ 0: string; 1: string }>;

    billerTokenAuthorizations(
      arg0: string,
      arg1: string
    ): TransactionObject<{ 0: string; 1: string }>;

    authorizedFor(
      amount: number | string,
      biller: string,
      token: string
    ): TransactionObject<boolean>;

    isPaid(pendingBillIndex: number | string): TransactionObject<boolean>;

    getBalance(token: string): TransactionObject<string>;

    bill(amount: number | string, token: string): TransactionObject<boolean>;

    approve(pendingBillIndex: number | string): TransactionObject<void>;

    authorize(
      biller: string,
      amount: number | string,
      waitTime: number | string,
      token: string
    ): TransactionObject<void>;

    revoke(biller: string, token: string): TransactionObject<void>;

    transfer(
      to: string,
      amount: number | string,
      token: string
    ): TransactionObject<void>;

    deposit(): TransactionObject<void>;

    owner(): TransactionObject<string>;
    wFactory(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    BillPaid(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: string[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    Deposit(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: string[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: string[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: string[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
}
