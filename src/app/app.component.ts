import { Component } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Default selection 
    optionsModel: number[] = [];

    // Settings configuration 
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'glyphicon',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };

    // Text configuration 
    myTexts: IMultiSelectTexts = {
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find1',
        defaultTitle: 'Select Types',
        allSelected: 'All selected',
    };

    // Labels / Parents 
    myOptions: IMultiSelectOption[] = [
        { id: 1, name: 'Car brands', isLabel: true },
        { id: 2, name: 'Volvo', parentId: 1 },
        { id: 3, name: 'Honda', parentId: 1 },
        { id: 4, name: 'BMW', parentId: 1 },
        { id: 5, name: 'Colors', isLabel: true },
        { id: 6, name: 'Blue', parentId: 5 },
        { id: 7, name: 'Red', parentId: 5 },
        { id: 8, name: 'White', parentId: 5 }
    ];

    public ngOnInit(): void {
    }

    private onChange(event): void {
        console.log(event);
    }
}