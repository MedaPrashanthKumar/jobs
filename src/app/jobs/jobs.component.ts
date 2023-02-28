import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
jobs = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Example Inc.',
    experience: '3+ years',
    salary: '$100,000 - $120,000',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Marketing Manager',
    company: 'ABC Corp.',
    experience: '5+ years',
    salary: '$80,000 - $100,000',
    location: 'New York, NY',
  },
  {
    id: 3,
    role: 'React developer',
    company: 'ABC Corp.',
    experience: '5+ years',
    salary: '$80,000 - $100,000',
    location: 'New York, NY',
  }, {
    id: 4,
    role: 'React-Native developer',
    company: 'ABC Corp.',
    experience: '5+ years',
    salary: '$80,000 - $100,000',
    location: 'New York, NY',
  },
  {
    id: 5,
    role: 'Angular developer',
    company: 'ABC Corp.',
    experience: '5+ years',
    salary: '$80,000 - $100,000',
    location: 'New York, NY',
  }, {
    id: 6,
    role: 'Dot-js developer',
    company: 'ABC Corp.',
    experience: '5+ years',
    salary: '$80,000 - $100,000',
    location: 'New York, NY',
  },
  // more job objects can be added here
];
  constructor() { }

  ngOnInit(): void {
  }

}
