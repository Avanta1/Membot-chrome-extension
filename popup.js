class ScrapeWords {
  
  constructor(courseUrl, learnType, courseNum=0) {
    var get_learnt_only = false;

    if (learnType === 'review' || learnType === 'speedreview') {
      get_learnt_only = true;
    }

    document.location.href = courseUrl;

    let subcourses = learnType === 'learn' ? courseUrl + courseNum + '/' : this.get_subcourses()
    for (let i = 0; i < subcourses.length; i++) {
      this.getwords(get_learnt_only);
    }
  }
  
  get_subcourses() {
  }
  
}
