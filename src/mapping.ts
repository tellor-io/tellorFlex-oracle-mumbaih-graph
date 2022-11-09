import {
  Contract,
  NewReport,
  NewStakeAmount,
  NewStaker,
  ReporterSlashed,
  StakeWithdrawRequested,
  StakeWithdrawn,
  ValueRemoved
} from "../generated/Contract/Contract"
import { NewReportEntity } from "../generated/schema"



export function handleNewReport(event: NewReport): void {
  let report = new NewReportEntity(event.block.timestamp.toHex());
  report._nonce = event.params._nonce;
  //Gives us the original query info in json object form
  //So long as its a legacy query
  report._queryData = event.params._queryData;
  report._queryId = event.params._queryId;
  //Unix Timestamp of reporting event
  report._time = event.params._time;
  //Value that reporter responded to queryData with
  report._value = event.params._value;
  //Reporter address
  report._reporter = event.params._reporter;
  report.txnHash = event.transaction.hash;

  report.save()
}


export function handleNewStakeAmount(event: NewStakeAmount): void {}

export function handleNewStaker(event: NewStaker): void {}

export function handleReporterSlashed(event: ReporterSlashed): void {}

export function handleStakeWithdrawRequested(
  event: StakeWithdrawRequested
): void {}

export function handleStakeWithdrawn(event: StakeWithdrawn): void {}

export function handleValueRemoved(event: ValueRemoved): void {}
