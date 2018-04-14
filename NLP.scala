import scala.util.parsing.combinator._
import scala.io._



class Parser() extends JavaTokenParsers{
	////"tag|api|tags|apis  from|with|which   (tagNames|Apinames and*) WITH more|equal|less   number"
	def tag = ("tags" | "tag") ^^ { a => "tag" }
	def api = ("apis" | "api") ^^ { a => "api" }
	def prep = "from" | "with" | "which" | "that"
	def more = "more" ^^ { a => ">" }
	def equal = "equal" ^^ { a => "="}
	def less = "less" ^^ {a => "<"}
	def quantifier = more | equal | less | number
	def tagNames = "co2" | "parking"
	def apiNames = "csn" | "polis"
	def names = tagNames | apiNames
	def number: Parser[Int] = """\d+(\.\d*)?""".r ^^ { _.toInt }
	def expr = (tag|api) ~ (prep ~> repsep(names,"and")) ~  (prep ~> rep(quantifier)) ^^ { 
					case research ~ names ~ qnt => translator(research,names,qnt) }
	
	def translator(res: String, names:List[Any], qnt: List[Any]): String = {
		//MATCH(n:Tag {name: $name})-[1..5]-(m:Tag) RETURN m
		println(res,names,qnt)
		var range = ""
		if(qnt.size == 2){
			range = makeRange(qnt(0).asInstanceOf[String],qnt(1).asInstanceOf[Int])
		}
		else {
			range = makeRange(qnt(0)+qnt(1).asInstanceOf[String],qnt(2).asInstanceOf[Int])
		}
		return "MATCH (n:Tag {name:$"+names(0)+"})-"+"["+range+"]-(res:"+res+") RETURN res"
	}

	def makeRange(s:String,i:Int): String = {
		s match {
			case ">=" => i+"..15"
			case ">"  => (i+1)+"..15"
			case "<=" => "1.."+i
			case "<" => "1.."+(i-1)
			case "=" => i.toString
			case _ => sys.error("Error while processing number")  
		}
	}
}

object NLP {
	def main(args:Array[String]){
		var acceptedKeywords = List("tags","tag","api","apis","from","that","which","with","more","equal","less","and","or")
		var tags = List("co2","parking")
		var apis = List("csn","polis")
		val p = new Parser()
		var s = ""
		for(line <- Source.fromFile(args(0)).getLines()) s += "\n" + line.trim
		var res = s.toLowerCase.split(" ").filter(x => acceptedKeywords.contains(x) || tags.contains(x) || 
													apis.contains(x) || x.matches("\\d+")).mkString(" ")
		p.parseAll(p.expr,res) match {
			case p.Success(msg, _) => println(msg)
			case p.Failure(msg,_) => println("Failure " + msg.toString)
			case p.Error(msg,_) => sys.error("Error: " + msg.toString)
		}
	}
}