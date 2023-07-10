(()=>{"use strict";var e={7396:(e,t,s)=>{s(6992),s(8674),s(9601),s(7727);var n=s(144),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[];const a={name:"app"},r=a;var c=s(1001),l=(0,c.Z)(r,i,o,!1,null,null,null);const d=l.exports;var u=s(8345),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",[e._v(e._s(e.title))]),s("div",{staticClass:"intro"},[s("p",{domProps:{innerHTML:e._s(e.introduction1)}}),s("p",{domProps:{innerHTML:e._s(e.introduction2)}}),s("p",{domProps:{innerHTML:e._s(e.introduction3)}})]),s("form",[s("div",{staticClass:"name_input"},[s("span",[e._v("Your name: ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),s("div",[s("button",{staticClass:"start",on:{click:e.pracQuestionnaire}},[e._v("Practice")])]),s("button",{staticClass:"start",on:{click:e.startQuestionnaire}},[e._v("Start")])])])},m=[];s(3210),s(8309),s(7658);const p={data:function(){return{title:"User Study about Safety Report",introduction1:"Welcome to our user study! In this study, you will be required to read <b>9</b> safety reports, and locate the vulnerable github file of the reported vulnerability. Each report should be completed within a <b>10-minute</b> time frame, and once the time is up, you will not be able to make any further changes and must move on to the next question.",introduction2:"For each report, you will need to search for the linked github file to the report and provide a confidence score of your choice. ",introduction3:"To begin the study, please enter your name and click start. The first report will commence, and the timer will begin counting down.",name:""}},methods:{startQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"report_experiment",params:{name:this.name}})},pracQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"demo_experiment",params:{name:this.name}})}}},f=p;var v=(0,c.Z)(f,h,m,!1,null,null,null);const b=v.exports;var _=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",[e._v(e._s(e.title))]),s("div",{staticClass:"intro"},[s("p",{domProps:{innerHTML:e._s(e.introduction1)}}),s("p",{domProps:{innerHTML:e._s(e.introduction2)}}),s("p",{domProps:{innerHTML:e._s(e.introduction3)}})]),s("form",[s("div",{staticClass:"name_input"},[s("span",[e._v("Your name: ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),s("div",[s("button",{staticClass:"start",on:{click:e.pracQuestionnaire}},[e._v("Practice")])]),s("button",{staticClass:"start",on:{click:e.startQuestionnaire}},[e._v("Start")])])])},g=[];const w={data:function(){return{title:"User Study about Safety Report",introduction1:"Welcome to our user study! In this study, you will be required to read <b>9</b> safety reports, and locate the vulnerable github file of the reported vulnerability. Each report should be completed within a <b>10-minute</b> time frame, and once the time is up, you will not be able to make any further changes and must move on to the next question.",introduction2:"For each report, you will need to search for the linked github file to the report and provide a confidence score of your choice. ",introduction3:"To begin the study, please enter your name and click start. The first report will commence, and the timer will begin counting down.",name:""}},methods:{startQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"report_control",params:{name:this.name}})},pracQuestionnaire:function(){""!==this.name.trim()&&this.$router.push({name:"demo_control",params:{name:this.name}})}}},y=w;var x=(0,c.Z)(y,_,g,!1,null,null,null);const q=x.exports;var E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please find the source github file for this CVE link: "),s("a",{attrs:{href:e.question.title,target:"_blank"}},[e._v(e._s(e.question.title))])]),s("ReportTuple",{key:"answer",ref:"reportTuples",attrs:{"able-edit":e.ableEdit,name:"answer"}}),e.showError?s("p",{style:{color:"red"}},[e._v(" Please fill in this field. Input \"Don't know\" if you can't find it ")]):e._e(),s("hr"),s("button",{staticClass:"next-button",on:{click:e.freezeTimer}},[e._v("Continue")])],1),e.showRatings?s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please rate your confidence.")]),e.showRatingError?s("p",{style:{color:"red"}},[e._v(" Please select an option. ")]):e._e(),s("Ratings_control",{key:"ratings",ref:"ratings"}),s("hr")],1):e._e(),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},C=[],k=(s(2564),s(8862),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-details"},[s("p",[e._v("Source Github File Link:")]),s("div",{staticClass:"form-group"},[s("label",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{rows:"3",disabled:!e.ableEdit},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}})])])])}),O=[];const T={name:"ReportTuple",props:{ableEdit:{type:Boolean,required:!0}},data:function(){return{answer:""}},methods:{resetParameters:function(){this.answer=""}}},P=T;var R=(0,c.Z)(P,k,O,!1,null,"4858fd92",null);const I=R.exports;var $=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-details"},[s("p",[e._v("Confidence")]),s("div",{staticClass:"form-group selections"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:1,checked:e._q(e.selectedOption_confidence,1)},on:{change:function(t){e.selectedOption_confidence=1}}}),e._v(" 1 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:2,checked:e._q(e.selectedOption_confidence,2)},on:{change:function(t){e.selectedOption_confidence=2}}}),e._v(" 2 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:3,checked:e._q(e.selectedOption_confidence,3)},on:{change:function(t){e.selectedOption_confidence=3}}}),e._v(" 3 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:4,checked:e._q(e.selectedOption_confidence,4)},on:{change:function(t){e.selectedOption_confidence=4}}}),e._v(" 4 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:5,checked:e._q(e.selectedOption_confidence,5)},on:{change:function(t){e.selectedOption_confidence=5}}}),e._v(" 5 ")])])])},S=[];const N={name:"Ratings_control",props:{},data:function(){return{selectedOption_confidence:null}},methods:{resetParameters:function(){this.selectedOption_confidence=null}}},F=N;var D=(0,c.Z)(F,$,S,!1,null,"6e484a9a",null);const V=D.exports;var A=s(3162);const Q={name:"Demo",components:{ReportTuple:I,Ratings_control:V},data:function(){return{questionIndex:0,minutes:10,seconds:0,ableEdit:!0,answers:{},finalStoredData:{},showRatings:!1,timer:null,showError:!1,showRatingError:!1,questions:[{title:"https://nvd.nist.gov/vuln/detail/CVE-2014-9828",recommendated:"https://github.com/ImageMagick/ImageMagick/tree/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b",recommendatedFiles:["https://github.com/ImageMagick/ImageMagick/blob/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b/ChangeLog"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-13024",recommendated:"https://github.com/the-tcpdump-group/tcpdump/tree/17f0687292c52893d16f55660f6b11b81ada153f",recommendatedFiles:["https://github.com/the-tcpdump-group/tcpdump/blob/17f0687292c52893d16f55660f6b11b81ada153f/print-mobility.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2006-6333",recommendated:"https://github.com/torvalds/linux/tree/c7f570a5eca59575572ee231390df727df207bda",recommendatedFiles:["https://github.com/torvalds/linux/blob/c7f570a5eca59575572ee231390df727df207bda/drivers/net/tokenring/ibmtr.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2015-4050",recommendated:"https://github.com/symfony/symfony/tree/def7ceb01acf32e872da4d74ddada2838ae7bf40",recommendatedFiles:["https://github.com/symfony/symfony/blob/def7ceb01acf32e872da4d74ddada2838ae7bf40/src/Symfony/Component/HttpKernel/EventListener/ProfilerListener.php"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-12867",recommendated:"https://github.com/simplesamlphp/simplesamlphp/tree/2deaa334191a74152b0be83938da7efccbdc4d79",recommendatedFiles:["https://github.com/simplesamlphp/simplesamlphp/blob/2deaa334191a74152b0be83938da7efccbdc4d79/lib/SimpleSAML/Auth/TimeLimitedToken.php"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2005-3356",recommendated:"https://github.com/torvalds/linux/tree/82c9df820112c6286a8e8fbe482e94b65b49062c",recommendatedFiles:["https://github.com/torvalds/linux/blob/82c9df820112c6286a8e8fbe482e94b65b49062c/ipc/mqueue.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-22880 ",recommendated:"https://github.com/rails/rails/tree/bddb2c9b193c976dbe6a9a1358479d1792931986",recommendatedFiles:"https://github.com/rails/rails/blob/bddb2c9b193c976dbe6a9a1358479d1792931986/activerecord/test/cases/adapters/postgresql/serial_test.rb"},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-10379 ",recommendated:"https://github.com/mysql/mysql-server/tree/197d0fbb2912a94bac39cffa2c4252d1bd14a469",recommendatedFiles:["https://github.com/mysql/mysql-server/blob/197d0fbb2912a94bac39cffa2c4252d1bd14a469/client/mysql.cc"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-21841",recommendated:"https://github.com/gpac/gpac/tree/70607fc71a671cf48a05e013a4e411429373dce7",recommendatedFiles:["https://github.com/gpac/gpac/blob/70607fc71a671cf48a05e013a4e411429373dce7/src/isomedia/box_code_base.c"]}]}},created:function(){},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers={},this.$refs["reportTuples"].resetParameters(),this.$refs["ratings"].resetParameters(),this.ableEdit=!0,this.showRatings=!1,this.startTimer()},freezeTimer:function(){this.answers["answer"]=this.$refs["reportTuples"].answer,this.formErrors=[],0!==this.answers["answer"].trim().length?(this.showError=!1,clearInterval(this.timer),this.ableEdit=!1,this.showRatings=!0,console.log(this.$refs),console.log(this.$refs["reportTuples"].answer),console.log("Answers:"+this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={github_link:this.answers["answer"],min:9-this.minutes,sec:60-this.seconds}):this.showError=!0},nextQuestion:function(){console.log(this.$refs),this.answers["confidence"]=this.$refs["ratings"].selectedOption_confidence,this.answers["confidence"]?(this.showRatingError=!1,console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]["confidence"]=this.answers["confidence"],this.questionIndex<this.questions.length-1?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))):this.showRatingError=!0},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,A.saveAs)(s,t)}},mounted:function(){this.startTimer()}},L=Q;var M=(0,c.Z)(L,E,C,!1,null,"778d4992",null);const Z=M.exports;var J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please find the source github file for this CVE link: "),s("a",{attrs:{href:e.question.title,target:"_blank"}},[e._v(e._s(e.question.title))])]),s("p",{staticClass:"question-title auto-wrap"},[e._v(" Related Repository: "),s("a",{attrs:{href:e.question.recommendated,target:"_blank"}},[e._v(e._s(e.question.recommendated))])]),s("p",{staticClass:"question-title auto-wrap"},[e._v(" Related Files: ")]),s("ul",e._l(e.question.recommendatedFiles,(function(t){return s("li",{key:t.id},[s("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])])})),0),s("ReportTuple",{key:"answer",ref:"reportTuples",attrs:{"able-edit":e.ableEdit,name:"answer"}}),e.showError?s("p",{style:{color:"red"}},[e._v(" Please fill in this field. Input \"Don't know\" if you can't find it ")]):e._e(),s("hr"),s("button",{staticClass:"next-button",on:{click:e.freezeTimer}},[e._v("Continue")])],1),e.showRatings?s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please rate your confidence and usefulness.")]),e.showRatingError?s("p",{style:{color:"red"}},[e._v(" Please select an option. ")]):e._e(),s("Ratings",{key:"ratings",ref:"ratings"}),s("hr")],1):e._e(),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},j=[],H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-details"},[s("p",[e._v("Confidence")]),s("div",{staticClass:"form-group selections"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:1,checked:e._q(e.selectedOption_confidence,1)},on:{change:function(t){e.selectedOption_confidence=1}}}),e._v(" 1 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:2,checked:e._q(e.selectedOption_confidence,2)},on:{change:function(t){e.selectedOption_confidence=2}}}),e._v(" 2 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:3,checked:e._q(e.selectedOption_confidence,3)},on:{change:function(t){e.selectedOption_confidence=3}}}),e._v(" 3 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:4,checked:e._q(e.selectedOption_confidence,4)},on:{change:function(t){e.selectedOption_confidence=4}}}),e._v(" 4 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_confidence,expression:"selectedOption_confidence"}],attrs:{type:"radio",disabled:!1,name:"answer-option-confidence"},domProps:{value:5,checked:e._q(e.selectedOption_confidence,5)},on:{change:function(t){e.selectedOption_confidence=5}}}),e._v(" 5 ")])]),s("p",[e._v("Usefulness")]),s("div",{staticClass:"form-group selections"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_usefulness,expression:"selectedOption_usefulness"}],attrs:{type:"radio",disabled:!1,name:"answer-option-usefulness"},domProps:{value:1,checked:e._q(e.selectedOption_usefulness,1)},on:{change:function(t){e.selectedOption_usefulness=1}}}),e._v(" 1 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_usefulness,expression:"selectedOption_usefulness"}],attrs:{type:"radio",disabled:!1,name:"answer-option-usefulness"},domProps:{value:2,checked:e._q(e.selectedOption_usefulness,2)},on:{change:function(t){e.selectedOption_usefulness=2}}}),e._v(" 2 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_usefulness,expression:"selectedOption_usefulness"}],attrs:{type:"radio",disabled:!1,name:"answer-option-usefulness"},domProps:{value:3,checked:e._q(e.selectedOption_usefulness,3)},on:{change:function(t){e.selectedOption_usefulness=3}}}),e._v(" 3 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_usefulness,expression:"selectedOption_usefulness"}],attrs:{type:"radio",disabled:!1,name:"answer-option-usefulness"},domProps:{value:4,checked:e._q(e.selectedOption_usefulness,4)},on:{change:function(t){e.selectedOption_usefulness=4}}}),e._v(" 4 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption_usefulness,expression:"selectedOption_usefulness"}],attrs:{type:"radio",disabled:!1,name:"answer-option-usefulness"},domProps:{value:5,checked:e._q(e.selectedOption_usefulness,5)},on:{change:function(t){e.selectedOption_usefulness=5}}}),e._v(" 5 ")])])])},z=[];const B={name:"Ratings",props:{},data:function(){return{selectedOption_confidence:null,selectedOption_usefulness:null}},methods:{resetParameters:function(){this.selectedOption_confidence=null,this.selectedOption_usefulness=null}}},U=B;var W=(0,c.Z)(U,H,z,!1,null,"27d55c5d",null);const K=W.exports,Y={name:"Demo",components:{ReportTuple:I,Ratings:K},data:function(){return{questionIndex:0,minutes:10,seconds:0,ableEdit:!0,answers:{},finalStoredData:{},showRatings:!1,timer:null,showError:!1,showRatingError:!1,questions:[{title:"https://nvd.nist.gov/vuln/detail/CVE-2014-9828",recommendated:"https://github.com/ImageMagick/ImageMagick/tree/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b",recommendatedFiles:["https://github.com/ImageMagick/ImageMagick/blob/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b/ChangeLog"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-13024",recommendated:"https://github.com/the-tcpdump-group/tcpdump/tree/17f0687292c52893d16f55660f6b11b81ada153f",recommendatedFiles:["https://github.com/the-tcpdump-group/tcpdump/blob/17f0687292c52893d16f55660f6b11b81ada153f/print-mobility.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2006-6333",recommendated:"https://github.com/torvalds/linux/tree/c7f570a5eca59575572ee231390df727df207bda",recommendatedFiles:["https://github.com/torvalds/linux/blob/c7f570a5eca59575572ee231390df727df207bda/drivers/net/tokenring/ibmtr.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2015-4050",recommendated:"https://github.com/symfony/symfony/tree/def7ceb01acf32e872da4d74ddada2838ae7bf40",recommendatedFiles:["https://github.com/symfony/symfony/blob/def7ceb01acf32e872da4d74ddada2838ae7bf40/src/Symfony/Component/HttpKernel/EventListener/ProfilerListener.php"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-12867",recommendated:"https://github.com/simplesamlphp/simplesamlphp/tree/2deaa334191a74152b0be83938da7efccbdc4d79",recommendatedFiles:["https://github.com/simplesamlphp/simplesamlphp/blob/2deaa334191a74152b0be83938da7efccbdc4d79/lib/SimpleSAML/Auth/TimeLimitedToken.php"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2005-3356",recommendated:"https://github.com/torvalds/linux/tree/82c9df820112c6286a8e8fbe482e94b65b49062c",recommendatedFiles:["https://github.com/torvalds/linux/blob/82c9df820112c6286a8e8fbe482e94b65b49062c/ipc/mqueue.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-22880 ",recommendated:"https://github.com/rails/rails/tree/bddb2c9b193c976dbe6a9a1358479d1792931986",recommendatedFiles:"https://github.com/rails/rails/blob/bddb2c9b193c976dbe6a9a1358479d1792931986/activerecord/test/cases/adapters/postgresql/serial_test.rb"},{title:"https://nvd.nist.gov/vuln/detail/CVE-2017-10379 ",recommendated:"https://github.com/mysql/mysql-server/tree/197d0fbb2912a94bac39cffa2c4252d1bd14a469",recommendatedFiles:["https://github.com/mysql/mysql-server/blob/197d0fbb2912a94bac39cffa2c4252d1bd14a469/client/mysql.cc"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-21841",recommendated:"https://github.com/gpac/gpac/tree/70607fc71a671cf48a05e013a4e411429373dce7",recommendatedFiles:["https://github.com/gpac/gpac/blob/70607fc71a671cf48a05e013a4e411429373dce7/src/isomedia/box_code_base.c"]}]}},created:function(){},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers={},this.$refs["reportTuples"].resetParameters(),this.$refs["ratings"].resetParameters(),this.ableEdit=!0,this.showRatings=!1,this.startTimer()},freezeTimer:function(){this.answers["answer"]=this.$refs["reportTuples"].answer,this.formErrors=[],0!==this.answers["answer"].trim().length?(this.showError=!1,clearInterval(this.timer),this.ableEdit=!1,this.showRatings=!0,console.log(this.$refs),console.log(this.$refs["reportTuples"].answer),console.log("Answers:"+this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={github_link:this.answers["answer"],min:9-this.minutes,sec:60-this.seconds}):this.showError=!0},nextQuestion:function(){console.log(this.$refs),this.answers["confidence"]=this.$refs["ratings"].selectedOption_confidence,this.answers["usefulness"]=this.$refs["ratings"].selectedOption_usefulness,this.answers["confidence"]&&this.answers["usefulness"]?(this.showRatingError=!1,console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]["confidence"]=this.answers["confidence"],this.finalStoredData["answers_"+(this.questionIndex+1)]["usefulness"]=this.answers["usefulness"],this.questionIndex<this.questions.length-1?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))):this.showRatingError=!0},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,A.saveAs)(s,t)}},mounted:function(){this.startTimer()}},G=Y;var X=(0,c.Z)(G,J,j,!1,null,"12b0c168",null);const ee=X.exports;var te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thanks"},[s("p",{domProps:{innerHTML:e._s(e.thanks1)}}),s("p",{domProps:{innerHTML:e._s(e.thanks2)}})])},se=[];const ne={name:"Thanks",data:function(){return{thanks1:"Thanks for participation. I don't have time to write a proper backend, so instead, the result is downloaded to your local side.",thanks2:"Please send it to me via Wechat, or to <a href='mailto:u5871153@anu.edu.au'>U5871153@anu.edu.au</a> :)"}}},ie=ne;var oe=(0,c.Z)(ie,te,se,!1,null,"55a07928",null);const ae=oe.exports;var re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please find the source github file for this CVE link: "),s("a",{attrs:{href:e.question.title,target:"_blank"}},[e._v(e._s(e.question.title))])]),s("ReportTuple",{key:"answer",ref:"reportTuples",attrs:{"able-edit":e.ableEdit,name:"answer"}}),e.showError?s("p",{style:{color:"red"}},[e._v(" Please fill in this field. Input \"Don't know\" if you can't find it ")]):e._e(),s("hr"),s("button",{staticClass:"next-button",on:{click:e.freezeTimer}},[e._v("Continue")])],1),e.showRatings?s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please rate your confidence.")]),e.showRatingError?s("p",{style:{color:"red"}},[e._v(" Please select an option. ")]):e._e(),s("Ratings_control",{key:"ratings",ref:"ratings"}),s("hr")],1):e._e(),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},ce=[];const le={name:"Demo",components:{ReportTuple:I,Ratings_control:V},data:function(){return{questionIndex:0,minutes:10,seconds:0,ableEdit:!0,answers:{},finalStoredData:{},showRatings:!1,timer:null,showError:!1,showRatingError:!1,questions:[{title:"https://nvd.nist.gov/vuln/detail/CVE-2014-3569",recommendated:"https://github.com/openssl/openssl/tree/5ad4fdce41bb1ce7762b70fb50f732f70e3772cf",recommendatedFiles:["https://github.com/openssl/openssl/blob/5ad4fdce41bb1ce7762b70fb50f732f70e3772cf/ssl/s3_srvr.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-21841",recommendated:"https://github.com/gpac/gpac/tree/70607fc71a671cf48a05e013a4e411429373dce7",recommendatedFiles:["https://github.com/gpac/gpac/blob/70607fc71a671cf48a05e013a4e411429373dce7/src/isomedia/box_code_base.c"]}]}},created:function(){},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers={},this.$refs["reportTuples"].resetParameters(),this.$refs["ratings"].resetParameters(),this.ableEdit=!0,this.showRatings=!1,this.startTimer()},freezeTimer:function(){this.answers["answer"]=this.$refs["reportTuples"].answer,this.formErrors=[],0!==this.answers["answer"].trim().length?(this.showError=!1,clearInterval(this.timer),this.ableEdit=!1,this.showRatings=!0,console.log(this.$refs),console.log(this.$refs["reportTuples"].answer),console.log("Answers:"+this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={github_link:this.answers["answer"],min:9-this.minutes,sec:60-this.seconds}):this.showError=!0},nextQuestion:function(){console.log(this.$refs),this.answers["confidence"]=this.$refs["ratings"].selectedOption_confidence,this.answers["confidence"]?(this.showRatingError=!1,console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]["confidence"]=this.answers["confidence"],this.questionIndex<this.questions.length-1?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))):this.showRatingError=!0},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,A.saveAs)(s,t)}},mounted:function(){this.startTimer()}},de=le;var ue=(0,c.Z)(de,re,ce,!1,null,"29d0e45f",null);const he=ue.exports;var me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container1"},[s("div",{staticClass:"question-header"},[s("h2",[e._v(e._s("Question "+(e.questionIndex+1)+":"))]),s("div",{staticClass:"timer"},[e._v(e._s("Time: "+e.minutes+":"+e.seconds))])]),s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please find the source github file for this CVE link: "),s("a",{attrs:{href:e.question.title,target:"_blank"}},[e._v(e._s(e.question.title))])]),s("p",{staticClass:"question-title auto-wrap"},[e._v(" Related Repository: "),s("a",{attrs:{href:e.question.recommendated,target:"_blank"}},[e._v(e._s(e.question.recommendated))])]),s("p",{staticClass:"question-title auto-wrap"},[e._v(" Related Files: ")]),s("ul",e._l(e.question.recommendatedFiles,(function(t){return s("li",{key:t.id},[s("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])])})),0),s("ReportTuple",{key:"answer",ref:"reportTuples",attrs:{"able-edit":e.ableEdit,name:"answer"}}),e.showError?s("p",{style:{color:"red"}},[e._v(" Please fill in this field. Input \"Don't know\" if you can't find it ")]):e._e(),s("hr"),s("button",{staticClass:"next-button",on:{click:e.freezeTimer}},[e._v("Continue")])],1),e.showRatings?s("div",{staticClass:"container2"},[s("p",{staticClass:"question-title"},[e._v(" Please rate your confidence and usefulness.")]),e.showRatingError?s("p",{style:{color:"red"}},[e._v(" Please select an option. ")]):e._e(),s("Ratings",{key:"ratings",ref:"ratings"}),s("hr")],1):e._e(),s("div",{staticClass:"container3"},[s("button",{staticClass:"next-button",on:{click:e.nextQuestion}},[e._v("Next")])])])},pe=[];const fe={name:"Demo",components:{ReportTuple:I,Ratings:K},data:function(){return{questionIndex:0,minutes:10,seconds:0,ableEdit:!0,answers:{},finalStoredData:{},showRatings:!1,timer:null,showError:!1,showRatingError:!1,questions:[{title:"https://nvd.nist.gov/vuln/detail/CVE-2014-3569",recommendated:"https://github.com/openssl/openssl/tree/5ad4fdce41bb1ce7762b70fb50f732f70e3772cf",recommendatedFiles:["https://github.com/openssl/openssl/blob/5ad4fdce41bb1ce7762b70fb50f732f70e3772cf/ssl/s3_srvr.c"]},{title:"https://nvd.nist.gov/vuln/detail/CVE-2021-21841",recommendated:"https://github.com/gpac/gpac/tree/70607fc71a671cf48a05e013a4e411429373dce7",recommendatedFiles:["https://github.com/gpac/gpac/blob/70607fc71a671cf48a05e013a4e411429373dce7/src/isomedia/box_code_base.c"]}]}},created:function(){},computed:{question:function(){return this.questions[this.questionIndex]}},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.seconds>0?e.seconds--:e.minutes>0?(e.minutes--,e.seconds=59):e.ableEdit=!1}),1e3)},resetParameters:function(){this.minutes=10,this.seconds=0,this.tupleIndex=1,this.ableEdit=!0,this.answers={},this.$refs["reportTuples"].resetParameters(),this.$refs["ratings"].resetParameters(),this.ableEdit=!0,this.showRatings=!1,this.startTimer()},freezeTimer:function(){this.answers["answer"]=this.$refs["reportTuples"].answer,this.formErrors=[],0!==this.answers["answer"].trim().length?(this.showError=!1,clearInterval(this.timer),this.ableEdit=!1,this.showRatings=!0,console.log(this.$refs),console.log(this.$refs["reportTuples"].answer),console.log("Answers:"+this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]={github_link:this.answers["answer"],min:9-this.minutes,sec:60-this.seconds}):this.showError=!0},nextQuestion:function(){console.log(this.$refs),this.answers["confidence"]=this.$refs["ratings"].selectedOption_confidence,this.answers["usefulness"]=this.$refs["ratings"].selectedOption_usefulness,this.answers["confidence"]&&this.answers["usefulness"]?(this.showRatingError=!1,console.log(this.answers),this.finalStoredData["answers_"+(this.questionIndex+1)]["confidence"]=this.answers["confidence"],this.finalStoredData["answers_"+(this.questionIndex+1)]["usefulness"]=this.answers["usefulness"],this.questionIndex<this.questions.length-1?(this.questionIndex+=1,this.resetParameters()):(this.saveAsJSON(),this.$router.push("/thanks"))):this.showRatingError=!0},saveAsJSON:function(){var e=JSON.stringify(this.finalStoredData,null,2),t=this.$route.params.name+".json",s=new Blob([e],{type:"text/plain;charset=utf-8"});(0,A.saveAs)(s,t)}},mounted:function(){this.startTimer()}},ve=fe;var be=(0,c.Z)(ve,me,pe,!1,null,"5d8dcd82",null);const _e=be.exports;n.Z.use(u.Z);var ge=[{path:"/experiments",name:"welcome_experiment",component:b},{path:"/experiments/report/:name",name:"report_experiment",component:ee},{path:"/thanks",name:"thanks",component:ae},{path:"/experiments/demo/:name",name:"demo_experiment",component:_e},{path:"/control",name:"welcome_control",component:q},{path:"/control/report/:name",name:"report_control",component:Z},{path:"/control/demo/:name",name:"demo_control",component:he}],we=new u.Z({routes:ge});const ye=we;new n.Z({router:ye,render:function(e){return e(d)}}).$mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.m=e,(()=>{var e=[];s.O=(t,n,i,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,i,o]=e[d],r=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](n[c])))?n.splice(c--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}})(),(()=>{s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,r,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(c)var d=c(s)}for(t&&t(n);l<a.length;l++)o=a[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},n=self["webpackChunktosem_exp"]=self["webpackChunktosem_exp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=s.O(void 0,[998],(()=>s(7396)));n=s.O(n)})();
//# sourceMappingURL=app.d092b550.js.map