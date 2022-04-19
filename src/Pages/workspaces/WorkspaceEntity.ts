import { BaseEntity } from "../../Helper/BaseEntity";
import { Building } from "../buildings/BuildingEntity";

export class Workspace extends BaseEntity {
  title?: string;
  isReservable: boolean = true;
  building?: Building;
}
