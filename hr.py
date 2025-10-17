import pandas as pd
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load the Excel file
data = pd.read_excel("newhr1.xlsx")  # Replace with your file name

# Email credentials
sender_email = "*************"  # Replace with your email
sender_password = "************"        # Replace with your email password

# Email server setup
smtp_server = "smtp.gmail.com"  # Replace with your SMTP server if not Gmail
smtp_port = 587

# Loop through each contact
for index, row in data.iterrows():
    name = row["Name"]
    email = row["Email"]
    title = row["Title"]
    company = row["Company"]

    # Create a personalized email
    subject = f"Excited to Connect with {company}"
    body = f"""
    Hi {name},

    I hope this email finds you well. I came across your profile and was impressed by your role as {title} at {company}. I believe my skills in Web Development could contribute to {company}'s goals.

    Looking forward to connecting!

    Best regards,
    S Sidharth Sankar
    sankar.sidharth03@gmail.com
    8117917933
    """

    # Create the email message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connect to the server and send the email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()  # Secure the connection
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, email, msg.as_string())
            print(f"Email sent to {email}")

    except Exception as e:
        print(f"Failed to send email to {email}: {e}")
