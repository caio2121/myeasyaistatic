param(
  [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$indexPath = Join-Path $Root "index.html"
$html = Get-Content -Raw -Path $indexPath

$html = $html -replace 'content="noindex, nofollow"', 'content="index, follow"'
$html = $html -replace 'content="https://caio2121\.github\.io/myeasyaistatic/"', 'content="https://myeasyai.com/"'
$html = $html -replace 'content="https://caio2121\.github\.io/myeasyaistatic/assets/social/og-image\.webp"', 'content="https://myeasyai.com/assets/social/og-image.webp"'
$html = $html -replace '"env":"staging"', '"env":"production"'
$html = $html -replace '"baseUrl":"https://caio2121\.github\.io/myeasyaistatic/"', '"baseUrl":"https://myeasyai.com/"'

if ($html -notmatch 'rel="canonical"') {
  $html = $html -replace '(<meta name="robots"[^>]*>)', "`$1`r`n  <link rel=`"canonical`" href=`"https://myeasyai.com/`">"
}

Set-Content -Path $indexPath -Value $html -Encoding utf8
Copy-Item (Join-Path $Root "robots.production.txt") (Join-Path $Root "robots.txt") -Force
Copy-Item (Join-Path $Root "sitemap.production.xml") (Join-Path $Root "sitemap.xml") -Force
Write-Output "Production meta applied to $indexPath"
