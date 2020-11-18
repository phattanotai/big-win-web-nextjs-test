import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="เบ็ทมั่นคง บริการคาสิโนออนไลน์ ยิงปลา สล็อต บาคาร่า แทงบอล สมัครง่าย ฝาก-ถอนอัตโนมัติ รวดเร็ว และพนักงานพร้อมให้บริการตลอด 24 ชม. คืนยอดเสีย สร้างรายได้ชวนเพื่อนเรทดีที่สุด" />
          <meta name="robots" content="index, follow" />
          <title>Bigwin เว็บเกมส์ออนไลน์ที่ดีที่สุด</title>

          <link rel="icon" type="image/png" href="/images/bw-4.png" sizes="30x30"></link>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          ></link>

          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <link
            rel="stylesheet"
            href="/static/plugins/bootstrap/bootstrap.min.css"
          ></link>
          <link rel="stylesheet" href="/static/plugins/w3/w3.css"></link>
          <link
            rel="stylesheet"
            href="/static/plugins/toastr/toastr.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="/static/plugins/sweetalert2/sweetalert2.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          ></link>
        </Head>
        <body className="sidebar-mini">
          <Main />
          <NextScript />

          <script src="/static/plugins/jquery/jquery.min.js" />
          <script src="/static/plugins/popper/popper.min.js" />
          <script src="/static/plugins/bootstrap/js/bootstrap.min.js" />
          <script src="/static/plugins/toastr/toastr.min.js"></script>
          <script src="/static/plugins/bootstrap-validator/bootstrapValidator.min.js"></script>
          <script src="/static/plugins/sweetalert2/sweetalert2.min.js"></script>
        </body>
      </html>
    );
  }
}
