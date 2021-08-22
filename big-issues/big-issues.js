function big_issue(issue) {
  var issue_title = issue.name;
  var desc_title = "History and Debate of " + issue.name;
  var desc = issue.desc;
  var result_title = "MM Members";
  var result_desc = issue.name;
  var percent1 = issue.pro_percent + "%";
  var percent2 = issue.con_percent + "%";
  var pro = "PRO";
  var con = "CON";

  document.getElementById("issue_title").innerHTML = issue_title;
  document.getElementById("issue_desc_title").innerHTML = desc_title;
  document.getElementById("issue_desc").innerHTML = desc;
  document.getElementById("result-title").innerHTML = result_title;
  document.getElementById("result-desc").innerHTML = result_desc;
  document.getElementById("vote-number-pro").innerHTML = percent1;
  document.getElementById("vote-number-con").innerHTML = percent2;
  document.getElementById("vote-types-pro").innerHTML = pro;
  document.getElementById("vote-types-con").innerHTML = con;

  document.getElementById("box-pro").style.paddingRight = padding_formula_pro(
    issue.pro_percent
  );
  document.getElementById("box-pro").style.paddingLeft = padding_formula_pro(
    issue.pro_percent
  );

  document.getElementById("box-con").style.paddingRight = padding_formula_con(
    issue.con_percent
  );
  document.getElementById("box-con").style.paddingLeft = padding_formula_con(
    issue.con_percent
  );
}

function padding_formula_pro(pro) {
  var max = 75;
  var paddingleft = (max * (pro / 100)) / 2;
  var final = paddingleft.toString();
  console.log(final);
  return final + "%";
}

function padding_formula_con(con) {
  var max = 75;
  var paddingleft = (max * (con / 100)) / 2;
  var final = paddingleft.toString();
  console.log(final);
  return final + "%";
}
