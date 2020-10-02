import { SimulationLinkDatum, SimulationNodeDatum } from './d3bundle';

export interface Activity {
  index: number;
  predecessors: number[];
  duration: number;
}

export interface ActivityWithTimes extends Activity {
  earliestStartTime: number;
  latestStartTime: number;
}

export interface Validation {
  error: string;
  activities: Activity[];
}

export interface NodeCPM extends SimulationNodeDatum {
  duration: number;
  earliestStartTime: number;
  latestStartTime: number;
}

export interface LinkCPM extends SimulationLinkDatum<NodeCPM> {}
