
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.{DefaultServlet, ServletContextHandler, ServletHolder}

object App {

  def main(args: Array[String]): Unit = {
    val server = new Server(8080)

    val ctx = new ServletContextHandler()
    ctx.setContextPath("/")

    val defaultServlet = new DefaultServlet()
    val holder = new ServletHolder("default", defaultServlet)
    holder.setInitParameter("resourceBase", "./webui/")

    ctx.addServlet(holder, "/*")

    server.setHandler(ctx)
    server.start()
  }
}
