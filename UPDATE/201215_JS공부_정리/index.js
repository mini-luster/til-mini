let params = new URL(document.location).searchParams;
let idx = +params.get("idx");
let chapter = +params.get("chapter");
let prevProgress = 0;
let slideNum = 1;
let lectureInterval = setInterval(() => {
  if (chapter > 3) {
    clearInterval(lectureInterval);
    return;
  }
  console.log("idx", idx, "Chapter", chapter);
  $.ajax({
    url:
      `${location.protocol}//${location.host}/app/api/study/chapter_jindo.asp`,
    dataType: "json",
    data: {
      idx,
      chapter,
      slideNum,
      slideUrl: "",
      slideCount: 7,
    },
    xhrFields: {
      withCredentials: true,
    },
    success: (data) => {
      if (data?.result !== "success") {
        slideNum = 1;
        return;
      }
      console.log("현재 진행률", data.chapter.study_ok);
      if (data?.chapter?.study_ok === prevProgress) {
        slideNum += 1;
      }
      if (data?.chapter?.study_ok === 100) {
        chapter += 1;
        slideNum = 1;
        prevProgress = 0;
      }
      prevProgress = +(data?.chapter?.study_ok ?? 0);
    },
    error: () => {
      clearInterval(lectureInterval);
    },
  });
}, 2000);
Collapse





