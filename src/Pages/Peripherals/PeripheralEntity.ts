import { BaseEntity } from "../../Helper/BaseEntity";
import { Building } from "../Buildings/BuildingEntity";
import { PeripheralType } from "../PeripheralTypes/PeripheralTypeEntity";

export class Peripheral extends BaseEntity {
  title?: string;
  building?: Building;
  category?: PeripheralType;
}
