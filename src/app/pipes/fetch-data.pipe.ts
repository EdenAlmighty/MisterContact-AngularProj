import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform, inject } from '@angular/core';

//** This is how the async pipe works */

@Pipe({
  name: 'fetchData',

  //! This false makes the pipe an impure function.
  //TODO: We need to handle when to handle changes in this case or it will loop.
  pure: false
})
export class FetchDataPipe implements PipeTransform {
  private http = inject(HttpClient)
  fetchedData: any = null
  fetchUrl = ''

  transform(url: string): any {

    //* Handle when to change:
    if (this.fetchUrl !== url) {

      //* Replace to new url if changed
      this.fetchUrl = url

      //* Cleanup prev data
      this.fetchedData = null

      this.http.get(url).subscribe(data => {
        this.fetchedData = data
      })
    }
    return this.fetchedData
  }
}
