//package se.bnpo.apiindex.nlp

import java.util.Base64
import scala.util.parsing.combinator._

class Parser() extends JavaTokenParsers{
	////"tag|api|tags|apis  from|with|which   (tagNames|Apinames and*) WITH more|equal|less   number"
	def tag = ("tags" | "tag") ^^ { a => "tag" }
	def api = ("apis" | "api") ^^ { a => "api" }
	def prep = "from" | "with" | "which" | "that"
	def more = ("more" | "bigger" | "greater" | ">") ^^ { a => ">" }
	def equal = ("equal" | "=" | "equals") ^^ { a => "="}
	def less = ("less" | "smaller" | "<") ^^ {a => "<"}
	def quantifier = more | equal | less |number
	def tagNames = "co2" | "parking" | "transport" | "forest" | "agriculture" | "accidents" | "location" | "society" | "sport"
	def apiNames = "csn" | "polis" | "nationalhealth" | "opendataportal" | "sgu environment"
	def names = tagNames | apiNames
  def number: Parser[Int] = """\d+(\.\d*)?""".r ^^ { _.toInt }
	def expr = (tag|api) ~ (prep ~> repsep(names,"and")) ~  (prep ~> rep(quantifier)) ^^ { 
					case research ~ names ~ qnt => translator(research,names,qnt) }

	def translator(res: String, names:List[Any], qnt: List[Any]): String = {
		//MATCH(n:Tag {name: $name})-[1..5List("csn","polis")]-(m:Tag) RETURN m
		//println(res,names,qnt)
		var range = ""
		if(qnt.size == 2){
			range = makeRange(qnt(0).asInstanceOf[String],qnt(1).asInstanceOf[Int])
		}
		else {
			range = makeRange(qnt(0)+qnt(1).asInstanceOf[String],qnt(2).asInstanceOf[Int])
		}
		println(names)
		return "MATCH (n:Tag {name:$"+names(0)+"})-"+"["+range+"]-(res:"+res+") RETURN res"
	}

	def makeRange(s:String,i:Int): String = {
		var tmp = i
		if (i <= 0) tmp = 1
		if (i > 15) tmp = 15
		s match {
			case ">=" => tmp+"..15"
			case ">"  => (tmp+1)+"..15"
			case "<=" => "1.."+tmp
			case "<" => "1.."+(tmp-1)
			case "=" => tmp.toString
			case _ => sys.error("Error while processing number")  
		}
	}
}

object NLP {
	def main(args:Array[String]){
		var acceptedKeywords = List("tags","tag","api","apis","from","that","which","with","more","equal","less","and","or",
									"greater",">","<","=","bigger","smaller","equals")
    var query = Base64.getDecoder.decode(args(0)).toString
    //var query = "I want all tags from csn and polis and co2 with depth smaller equal than 8"
		var tags = args(1).split(",")
		var apis = args(2).split(",")
		val p = new Parser()
		var res = query.toLowerCase.split(" ").filter(x => acceptedKeywords.contains(x) || tags.contains(x) ||
													apis.contains(x) || x.matches("\\d+")).mkString(" ")
		p.parseAll(p.expr,res) match {
			case p.Success(msg, _) => println(msg)
			case p.Failure(msg,_) => println("Failure " + msg.toString)
			case p.Error(msg,_) => sys.error("Error: " + msg.toString)
		}
	}
}
