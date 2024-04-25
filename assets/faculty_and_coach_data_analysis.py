import pandas as pd
import matplotlib.pyplot as plt
import altair as alt

# Load the data
coach_faculty_df = pd.read_csv("data/coach_vs_faculty.csv")

# Clean data
coach_faculty_df.head()
coach_faculty_df.drop(columns=["Unnamed: 0"], inplace=True)
print(coach_faculty_df.head(30))

# Get coaches and faculty, separately
coaches_df = coach_faculty_df[coach_faculty_df["Job"] == "Coach"]
faculty_df = coach_faculty_df[coach_faculty_df["Job"] == "Faculty"]

years = coach_faculty_df["YEAR"].unique()
print(years)

# # Function to get the faculty by university
# def get_job_by_university(df, university):
#     return df[df["DEPARTMENT_LOCATION_ZIP_CODE"] == university]

# # Get the jobs by university
# coaches_amherst_df = get_job_by_university(coaches_df, "U Mass Amherst")
# coaches_boston_df = get_job_by_university(coaches_df, "U Mass Boston")
# coaches_dartmouth_df = get_job_by_university(coaches_df, "U Mass Dartmouth")
# coaches_lowell_df = get_job_by_university(coaches_df, "U Mass Lowell")

# faculty_amherst_df = get_job_by_university(faculty_df, "U Mass Amherst")
# faculty_boston_df = get_job_by_university(faculty_df, "U Mass Boston")
# faculty_dartmouth_df = get_job_by_university(faculty_df, "U Mass Dartmouth")
# faculty_lowell_df = get_job_by_university(faculty_df, "U Mass Lowell")

# # Plot the average annual rate by university
def plot_average_annual_rate_by_university(university_df):
    plt.figure(figsize=(10, 12))
    max_annual_rate_by_year = university_df.groupby("YEAR")["ANNUAL_RATE"].max()
    plt.plot(max_annual_rate_by_year.index, max_annual_rate_by_year.values, marker='o', linestyle='-')
    plt.title("Maximum Annual Rate by Year")
    plt.xlabel("Year")
    plt.ylabel("Maximum Annual Rate")
    plt.ylim(0, 120_000)
    plt.show()

alt.data_transformers.disable_max_rows()

job_color_scale = alt.Color(domain=["Coach", "Faculty"], range=["orange", "blue"])

# Create the chart
chart = alt.Chart(coach_faculty_df).mark_line(strokeWidth=3).encode(
    x=alt.X('YEAR:O', title='Year'),
    y=alt.Y('max(ANNUAL_RATE):Q', title=""),
    color=alt.Color('Job:N', scale=job_color_scale, legend=alt.Legend(title="Job", titleFontSize=30, labelFontSize=16)),
    column=alt.Column('Job:N', title=""),
    row=alt.Row('DEPARTMENT_LOCATION_ZIP_CODE:N', title="")
).configure(
    numberFormat="$,.0f"
).configure_axis(
    labelFontSize=12,
    titleFontSize=18,
    labelAngle=0,
    grid=False
).configure_header(
    labelFontSize=36,
    labelFontWeight="bold"
).properties(
    width=600
).configure_view(
    fill="#f8ead8",
    strokeWidth=2,
    stroke="black"
)

# print(chart)