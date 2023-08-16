import { apiInitializer } from "discourse/lib/api";
import { longDate } from "discourse/lib/formatter";

export default apiInitializer("0.11.1", api => {
  api.reopenWidget("post-date", {
    html(attrs) {
      let test =  this._super(attrs);
      let date = attrs.wiki && attrs.lastWikiEdit ? new Date(attrs.lastWikiEdit) : new Date(attrs.created_at);
      test.attrs.rawLabel = longDate(date);
      return test;
    }
  });
});
