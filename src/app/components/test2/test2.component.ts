import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupName } from '@angular/forms'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  title = 'Reactive Forms';

  powerCategoryVsPowerNameMap = new Map<string, Set<string>>();
  heroCodeVsHeroNameMap = new Map<number, string>();
  heroCodeVSPowerNameMap = new Map<number, Map<string, Set<string>>>();

  accessFirstColumn: string[]= [];





  reactiveForm: FormGroup;

  accessCheckboxFGN: FormGroupName;

  constructor(private fb: FormBuilder) {

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(false)
    });

    

  }

  ngOnInit() {
    this.setPowerCategoryVsPowerNameMap();
    this.setAccessFirstColumn(this.powerCategoryVsPowerNameMap);
    this.setHeroCodeVsHeroNameMap();
    this.setHeroCodeVsPowerNameMap();
  }
  setHeroCodeVsHeroNameMap() {
    this.heroCodeVsHeroNameMap.set(102, 'robin');
    this.heroCodeVsHeroNameMap.set(556, 'alex');
    this.heroCodeVsHeroNameMap.set(300, 'luke');
  }
  setPowerCategoryVsPowerNameMap() {
    let powerSet = new Set<string>();
    powerSet.add('shield');
    powerSet.add('fire');
    this.powerCategoryVsPowerNameMap.set('category-1', powerSet);
    powerSet = new Set<string>();
    powerSet.add('smoke');
    powerSet.add('poison');
    powerSet.add('ice');
    this.powerCategoryVsPowerNameMap.set('category-2', powerSet);
    powerSet = new Set<string>();
    powerSet.add('self-heal');
    powerSet.add('ice');
    powerSet.add('fire');
    this.powerCategoryVsPowerNameMap.set('category-3', powerSet);
  }
  setHeroCodeVsPowerNameMap() {
    let powerSet = new Set<string>();
    powerSet.add('smoke');
    let powerMap = new Map<string, Set<string>>();
    powerMap.set('category-2', powerSet);
    powerSet = new Set<string>();
    powerSet.add('ice');
    powerMap = new Map<string, Set<string>>();
    powerMap.set('category-3', powerSet);
    this.heroCodeVSPowerNameMap.set(102, powerMap);
    powerSet = new Set<string>();
    powerSet.add('self-heal');
    powerSet.add('ice');
    powerMap = new Map<string, Set<string>>();
    powerMap.set('category-3', powerSet);
    this.heroCodeVSPowerNameMap.set(300, powerMap);
  }
  setAccessFirstColumn(mapInput: Map<string, Set<string>>) {
    for(let entry of this.powerCategoryVsPowerNameMap.entries()){
      this.accessFirstColumn.push(entry.toString());
    }
    return (mapInput.keys());
  }
  setAccessSecondColumn(firstColumnValue: string, mapInput: Map<string, Set<string>>) {
    return (mapInput.get(firstColumnValue));
  }

  buildCheckBox(){

  }

  uncheckAll() {

  }
  getAllValues() {

  }
}
