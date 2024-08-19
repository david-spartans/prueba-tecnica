import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  name = new FormControl('');
  @Output() onSearch: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();
  text = '';

  ngOnInit() {
    this.name.valueChanges.subscribe((value: string | null) => {
      this.onSearch.emit(value);
    });
  }
}
