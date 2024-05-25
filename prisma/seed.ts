import { PrismaClient, Status, Priority, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        username: "johndoe",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.ADMIN,
      },
      {
        name: "Jane Smith",
        username: "janesmith",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.ADMIN,
      },
      {
        name: "Michael Johnson",
        username: "michaeljohnson",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.ADMIN,
      },
      {
        name: "Emily Davis",
        username: "emilydavis",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.USER,
      },
      {
        name: "William Brown",
        username: "williambrown",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.USER,
      },
      {
        name: "David Wilson",
        username: "davidwilson",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.TECH,
      },
      {
        name: "Sarah Anderson",
        username: "sarahanderson",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.TECH,
      },
      {
        name: "Jessica Taylor",
        username: "jessicataylor",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.TECH,
      },
      {
        name: "Christopher Thomas",
        username: "christopherthomas",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.TECH,
      },
      {
        name: "Amanda Garcia",
        username: "amandagarcia",
        password:
          "$2a$10$Oej2OOt0IzdDnKVjPFDl7egIfyHLFZQWbazw3L8VT0C8jrudXIdoq",
        role: Role.TECH,
      },
    ],
  });

  await prisma.ticket.createMany({
    data: [
      {
        title: "Cannot access email",
        description:
          "I am unable to log in to my email account. It keeps showing an error message.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Printer not working",
        description:
          "The office printer is not printing any documents. It seems to be out of paper.",
        status: Status.STARTED,
        priority: Priority.HIGH,
      },
      {
        title: "Network connectivity issue",
        description:
          "I am experiencing intermittent network disconnections. It is affecting my work.",
        status: Status.OPEN,
        priority: Priority.LOW,
      },
      {
        title: "Software installation problem",
        description:
          "I am having trouble installing the latest software update on my computer. The installation process keeps failing.",
        status: Status.CLOSED,
        priority: Priority.MEDIUM,
      },
      {
        title: "Server down",
        description:
          "The server hosting our website is currently down. Visitors cannot access our website.",
        status: Status.OPEN,
        priority: Priority.HIGH,
      },
      {
        title: "Cannot connect to VPN",
        description:
          "I am unable to establish a connection to the company VPN. I need access to internal resources.",
        status: Status.CLOSED,
        priority: Priority.MEDIUM,
      },
      {
        title: "Slow computer performance",
        description:
          "My computer is running very slow. It takes a long time to open programs and load files.",
        status: Status.OPEN,
        priority: Priority.LOW,
      },
      {
        title: "Email attachment issue",
        description:
          "I am unable to open email attachments. Every time I try, it gives an error.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Wireless network not available",
        description:
          "I cannot find any available wireless networks in the office. Other devices can connect fine.",
        status: Status.OPEN,
        priority: Priority.HIGH,
      },
      {
        title: "Application crashing",
        description:
          "The application I am working on keeps crashing randomly. I lose unsaved work each time.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Cannot access shared drive",
        description:
          "I am unable to access the shared drive on the network. It says permission denied.",
        status: Status.OPEN,
        priority: Priority.LOW,
      },
      {
        title: "Blue screen error",
        description:
          "My computer keeps showing a blue screen error and automatically restarts.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Email filter issue",
        description:
          "Some important emails are being marked as spam and moved to the junk folder.",
        status: Status.OPEN,
        priority: Priority.HIGH,
      },
      {
        title: "Cannot print in color",
        description:
          "The printer only prints in black and white. I need to print in color for a presentation.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Web browser not responding",
        description:
          "My web browser freezes and stops responding frequently. I have to force close it.",
        status: Status.CLOSED,
        priority: Priority.LOW,
      },
      {
        title: "Email sending failed",
        description:
          "I am unable to send emails. Every time I try, it shows a sending failed error.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Cannot access company website",
        description:
          'I cannot access our company website. It gives a "page not found" error.',
        status: Status.OPEN,
        priority: Priority.HIGH,
      },
      {
        title: "File corruption issue",
        description:
          "Some of my files are getting corrupted and I cannot open them anymore.",
        status: Status.STARTED,
        priority: Priority.MEDIUM,
      },
      {
        title: "Missing software license",
        description:
          "I need a license key for a software I am using. I cannot proceed without it.",
        status: Status.OPEN,
        priority: Priority.LOW,
      },
      {
        title: "Email synchronization problem",
        description:
          "My emails are not syncing properly across devices. Some emails are missing.",
        status: Status.STARTED,
        priority: Priority.MEDIUM,
      },
      {
        title: "Cannot connect to remote desktop",
        description:
          "I am unable to establish a remote desktop connection to my work computer.",
        status: Status.OPEN,
        priority: Priority.HIGH,
      },
      {
        title: "Application freeze",
        description:
          "The application I am using freezes frequently. I have to close and reopen it.",
        status: Status.CLOSED,
        priority: Priority.MEDIUM,
      },
      {
        title: "Email attachment virus warning",
        description:
          "My antivirus software is flagging email attachments as potentially harmful.",
        status: Status.OPEN,
        priority: Priority.LOW,
      },
      {
        title: "Cannot access company intranet",
        description:
          "I cannot access our company intranet. It says the page is blocked.",
        status: Status.OPEN,
        priority: Priority.MEDIUM,
      },
      {
        title: "Printer paper jam",
        description:
          "The printer is jammed with paper. I am unable to clear the jam.",
        status: Status.CLOSED,
        priority: Priority.HIGH,
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
