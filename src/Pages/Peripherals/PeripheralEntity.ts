import { BaseEntity } from "../../Helper/BaseEntity";
import { Building } from "../buildings/BuildingEntity";
import { PeripheralType } from "../PeripheralTypes/PeripheralTypeEntity";

export class Peripheral extends BaseEntity {
  title?: string;
  building?: Building;
  category?: PeripheralType;
}
